// 리스트 10.13 캐시에 접근하는 BookableEdit 컴포넌트

import {useNavigate, useParams} from "react-router-dom";
import {useQueryClient, useQuery, useMutation} from "react-query";

import useFormState from "./useFormState";
import getData, {editItem, deleteItem} from "../../utils/api";

import BookableForm from "./BookableForm";
import PageSpinner from "../UI/PageSpinner";

export default function BookableEdit () {
  const {id} = useParams();
  const {data, isLoading} = useBookable(id);
  const formState = useFormState(data);

  const {
    updateBookable,
    isUpdating,
    isUpdateError,
    updateError
  } = useUpdateBookable();

  const {
    deleteBookable,
    isDeleting,
    isDeleteError,
    deleteError
  } = useDeleteBookable();

  function handleDelete() {
    if (window.confirm("Are you want to delete the bookable?")) {
      deleteBookable(formState.state);
    }
  }

  function handleSubmit() {
    updateBookable(formState.state);
  }

  if (isUpdateError || isDeleteError) {
    return <p>{updateError?.message || deleteError.message}</p>
  }

  if (isLoading || isUpdating || isDeleting) {
    return <PageSpinner/>
  }

  return (
    <BookableForm
      formState={formState}
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}
    />
  );
}

function useBookable (id) {
  const queryClient = useQueryClient();
  return useQuery(
    ["bookable", id],
    () => getData(`http://localhost:3001/bookables/${id}`),
    {
      initialData:
        queryClient.getQueryData("bookables")
        ?.find(b => b.id === parseInt(id, 10))
    }
  );
}

function useUpdateBookable () {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation(
    item => editItem(`http://localhost:3001/bookables/${item.id}`, item),
    {
      onSuccess: bookable => {
        updateBookablesCache(bookable, queryClient);
        queryClient.setQueryData(["bookable", String(bookable.id)], bookable);
        navigate(`/bookables/${bookable.id}`);
      }
    }
  );

  return {
    updateBookable: mutation.mutate,
    isUpdating: mutation.isLoading,
    isUpdateError: mutation.isError,
    updateError: mutation.error
  };
}

function updateBookablesCache (bookable, queryClient) {
  const bookables = queryClient.getQueryData("bookables") || [];
  const bookableIndex = bookables.findIndex(b => b.id === bookable.id);
  if (bookableIndex !== -1) {
    bookables[bookableIndex] = bookable;
    queryClient.setQueryData("bookables", bookables);
  }
}

function useDeleteBookable () {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation(
    bookable => deleteItem(`http://localhost:3001/bookables/${bookable.id}`),
    {
      onSuccess: (response, bookable) => {
        const bookables = queryClient.getQueryData("bookables") || [];
        queryClient.setQueryData(
          "bookables",
          bookables.filter(b => b.id !== bookable.id)
        );

        navigate(`/bookables/${getIdForFirstInGroup(bookables, bookable) || ""}`);
      }
    }
  );

  return {
    deleteBookable: mutation.mutate,
    isDeleting: mutation.isLoading,
    isDeleteError: mutation.isError,
    deleteError: mutation.error
  };
}

function getIdForFirstInGroup (bookables, excludedBookable) {
  const {id, group} = excludedBookable;
  const bookableInGroup = bookables.find(b => b.group === group && b.id !== id);
  return bookableInGroup?.id;
}
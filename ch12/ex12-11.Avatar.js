// 리스트 12.11 리액트 쿼리를 사용하는 Img 컴포넌트

function Img ({src, alt, ...props}) {
  const {data: imgObject} = useQuery(
    src,
    () => new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = src;
    }),
    {suspense: true}
  );

  return <img src={imgObject.src} alt={alt} {...props}/>
}
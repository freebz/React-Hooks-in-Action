// 리스트 12.12 Img와 Suspense를 사용하는 Avatar 컴포넌트

import {Suspense} from "react";
import {useQuery} from "react-query";

export default function Avatar ({src, alt, fallbackSrc, ...props}) {
  return (
    <div className="user-avatar">
      <Suspense
        fallback={<img src={fallbackSrc} alt="Fallback Avatar"/>}
      >
        <Img src={src} alt={alt} {...props}/>
      </Suspense>
    </div>
  );
}
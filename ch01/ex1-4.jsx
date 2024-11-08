// 1.4.2 Suspense

const { Suspense } = require("react");

<Suspense fallback={<MySpinner />}>
  <MyFirstComponent />
  <MySecondComponent />
</Suspense>
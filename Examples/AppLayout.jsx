import { Outlet } from "react-router-dom";
// import { Header } from
// import { Fotter } from

/* 
/ const Links = [
.......
]
 */

export default function AppLayout() {
  return (
    <>
      {/* <Header links={Links} /> */}
      {/* <Footer links={Links} /> */}
      <Outlet />
    </>
  );
}

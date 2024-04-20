import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";
import { Suspense } from "react";

export const Main_PageLayout = () => {
  return (
    <section className="min-h-svh flex flex-col">
      <Header />
      <main className="grow">
        <Suspense fallback={"Loading..."}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </section>
  );
};

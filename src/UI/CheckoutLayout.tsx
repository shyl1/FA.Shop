import Breadcrumb from "@components/shared/Breadcrumb";
import { Outlet } from "react-router-dom";

export default function CheckoutLayout() {
  return (
    <section className="container ">
      {/* Breadcrumb */}
      <Breadcrumb current="Checkout"/>

      <div className="mt-5">
        <Outlet />
      </div>

    </section>
  )
}

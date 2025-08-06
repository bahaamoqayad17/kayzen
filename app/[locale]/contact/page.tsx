import ContactUsForm from "@/components/ContactUsForm";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Contact() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(/our-clients.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <div className="pt-20">
          <ContactUsForm />
        </div>
      </div>
    </>
  );
}

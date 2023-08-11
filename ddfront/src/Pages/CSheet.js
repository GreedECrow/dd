import React from "react";
import Form from "../components/Form/Form";

export default function CSheet({ handleAddSheet }) {
  return (
    <div>
      <h2>Character Creator</h2>
      <section>
          <article>
            <p>
              Dead easy this one. Just pick out the bits you like best.
              <br />
              You can make as many as you want so run wild.
              <br />
             Remember to check the "Saved Characters page to look upon your mighty deeds!"
            </p>
          </article>
        </section>
      <Form onSubmitFunc={handleAddSheet} />
    </div>
  );
}

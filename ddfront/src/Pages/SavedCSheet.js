import React from "react";
import SheetCard from "../components/SheetCard/SheetCard";

export default function SavedCSheet({
  sheets,
  handleDelete,
  handleUpdateSheet,
}) {
  return (
    <div>
      <section>
        <article>
          <p>
            {" "}
            HOORAY!! You made it, well done adventurer. I can't say I don't envy
            you. 
            <br />
            From here you can look over your created character sheets and maybe
            edit them. 
            <br />
            I don't know about that one, we'll see what we're like for time.
            <br />
            If you've decided you're awesomeness is overwhelming you can also
            delete and start again."
          </p>
        </article>
      </section>
      <SheetCard
        sheets={sheets}
        handleDelete={handleDelete}
        handleUpdateSheet={handleUpdateSheet}
      />
    </div>
  );
}

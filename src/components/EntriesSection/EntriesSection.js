import { Fragment, useState } from "react";
import Entry from "../Entry/Entry";
import "./EntriesSection.css";
import Divider from "../Divider/Divider";

export default function EntriesSection({ entries }) {
  return (
    <>
      <div class="tabs">
        <div class="tab">
          <div>All Entries</div>
          <div class="tab_count">3</div>
        </div>
        <div class="tab">
          <div>Favorites</div>
          <div class="tab_count">1</div>
        </div>
      </div>

      {entries.map(({ id, date, motto, notes }, index) => (
        <Fragment key={id}>
          {index !== 0 ? <Divider /> : <></>}

          <Entry id={id} date={date} motto={motto} notes={notes}></Entry>
        </Fragment>
      ))}
    </>
  );
}

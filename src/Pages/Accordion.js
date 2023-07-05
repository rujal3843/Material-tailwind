import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function According() {
  const [openAcc1, setOpenAcc1] = useState(true);
  const [openAcc2, setOpenAcc2] = useState(true);
  const [openAcc3, setOpenAcc3] = useState(true);
 
  const handleOpenAcc1 = () => setOpenAcc1(cur => !cur);
  const handleOpenAcc2 = () => setOpenAcc2(cur => !cur);
  const handleOpenAcc3 = () => setOpenAcc3(cur => !cur);
 
  return (
    <Fragment>
      <Accordion open={openAcc1}>
        <AccordionHeader onClick={handleOpenAcc1}>
          What is Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={openAcc2}>
        <AccordionHeader onClick={handleOpenAcc2}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={openAcc3}>
        <AccordionHeader onClick={handleOpenAcc3}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
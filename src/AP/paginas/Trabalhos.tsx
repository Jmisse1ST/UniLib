const Trabalhos = () => {
    return(
        <>
        <div className="mt-20"><AccordionTrabalho/></div>
        </>
    )
}

export default Trabalhos;


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AlertaSemTestes } from "@/Section/Alerta";

export function AccordionTrabalho() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full p-5 2xl:max-w-[50%]  mx-auto text-center"
      defaultValue="item-1"
      mx-auto = "lg:max-w-[50%]">
    <AccordionItem value="item-1">

        <h1 className="text-center gap-2 text-sky-400">Datas Trabalhos</h1>

        <AccordionTrigger>Primeiro Ano</AccordionTrigger> 
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
               <AlertaSemTestes/>
          </p>
          <p>
            
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Segundo Ano</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
                <AlertaSemTestes/>
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Terceiro Ano</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
                 <AlertaSemTestes/>
          </p>
          <p>
                 
          </p>
        </AccordionContent>
        
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Quarto Ano</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
                  <AlertaSemTestes/>
          </p>
          <p>
            
          </p>
        </AccordionContent>
        
      </AccordionItem>
    </Accordion>
  )
}
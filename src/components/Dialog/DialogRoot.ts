import { Ref } from 'vue'
import { createContext } from "@/shared/createContext";
import { useVModel } from "@vueuse/core";

export interface DialogRootProps {
  open?: boolean
  defaultOpen?: boolean
  modal?: boolean
}

export interface DialogRootEmits {
  (e: "update:open", value: boolean): void;
}


export interface DialogRootContext {
  open: Ref<boolean>
}

export const [injectDialogRootContext, provideDialogRootContext] =
  createContext<DialogRootContext>("DialogRoot");


export function useDialogRoot(props: DialogRootProps, emit: DialogRootEmits) {



  const open = useVModel(props, 'open', emit,) as Ref<boolean>


  provideDialogRootContext({
    open,
  });

  return {
    open,
  }
}

import { createContext } from "@/shared/createContext";

interface AvatarRootContext {
  size?: string;
}

export const [injectAvatarRootContext, provideAvatarRootContext] =
  createContext<AvatarRootContext>("AvatarRoot");



export function useAvatarRoot(props: AvatarRootContext) {
  provideAvatarRootContext({
    size: props.size,
  });
}


import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";

export default function DrawerWrapper({ open, setOpen, children }) {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      {/* Drawer cobre apenas da parte inferior do header pra baixo */}
      <div className="fixed inset-0 top-16 flex justify-start">
        <Transition show={open}>
          <DialogPanel className="w-72 max-w-full bg-white shadow-xl h-full">
            <div className="p-4 overflow-y-auto h-full">{children}</div>
          </DialogPanel>
        </Transition>
      </div>
    </Dialog>
  );
}

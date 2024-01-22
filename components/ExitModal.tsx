"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Button,
} from "@nextui-org/react";
import { useEffect } from "react";
import { useExitIntent } from "use-exit-intent";
const ExitModal = () => {
  const { isOpen, onOpenChange } = useDisclosure();
  // const [isOpen, setIsOpen] = useState(false)
  const { registerHandler } = useExitIntent({
    desktop: {
      triggerOnIdle: false,
      useBeforeUnload: false,
      triggerOnMouseLeave: true,
      delayInSecondsToTrigger: 10,
    },
    // mobile: {
    //   delayInSecondsToTrigger: 5,
    //   // "delayInSecondsToTrigger": 8,
    //   triggerOnIdle: true,
    // },
  });

  // leave back logic
  useEffect(() => {
    registerHandler({
      id: "openModal",
      handler: () => onOpenChange(),
    });
  }, [registerHandler]);
  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          wrapper:"!flex !justify-center !items-center",
          backdrop: "bg-white/90 backdrop-opacity-40",
          base: "text-white bg-primary",
          body: "!py-1",
          header: "w-full ",
          footer: "w-full",
          closeButton: "mt-3.5 mx-2.5 hover:text-red-500 hover:bg-white/5 active:bg-white/10 text-white",
        }}
      >
        <ModalContent>
            <ModalHeader className="flex  justify-center items-center font-Montserrat font-bold text-[26px]">
              Thanks for visiting IQU
            </ModalHeader>
            <ModalBody>
              <form className="w-full mx-auto h-full">
                <Input
                  // variant="bordered"
                  type="email"
                  label="Email"
                  labelPlacement={"outside"}
                  placeholder="Enter your email"
                  className="font-Lato font-normal text-base md:text-lg placeholder:text-zinc-400 bg-white text-black overflow-hidden  rounded-full"
                />
              </form>
            </ModalBody>
            <ModalFooter className="justify-center items-center">
              <Button color="success" size="lg" radius="full" className="font-Lato font-semibold text-white text-lg">
                Subscribe
              </Button>
            </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ExitModal
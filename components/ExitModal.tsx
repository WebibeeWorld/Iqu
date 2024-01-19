"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useExitIntent } from "use-exit-intent";
export const ExitModal = () => {
  const { isOpen, onOpenChange } = useDisclosure();
  // const [isOpen, setIsOpen] = useState(false)
  const { registerHandler } = useExitIntent({
    desktop: {
      triggerOnIdle: false,
      useBeforeUnload: false,
      triggerOnMouseLeave: true,
      delayInSecondsToTrigger: 10,
      // "delayInSecondsToTrigger": 20
    },
    mobile: {
      delayInSecondsToTrigger: 5,
      // "delayInSecondsToTrigger": 8,
      triggerOnIdle: true,
    },
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
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46] w-full",
          footer: "border-t-[1px] border-[#292f46] w-full",
          closeButton: "mt-2 hover:bg-white/5 active:bg-white/10 text-white",
        }}
      >
        <ModalContent>
            <ModalHeader className="flex flex-col justify-center items-center gap-5">
              Thanks for visiting IQU
            </ModalHeader>
            <ModalBody>
              <form className="space-y-5 w-full mx-auto">
                <Input
                  variant="bordered"
                  type="email"
                  label="Email"
                  labelPlacement={"outside"}
                  placeholder="Enter your email"
                />
              </form>
            </ModalBody>
            <ModalFooter className="justify-center items-center">
              {/* <Button color="primary" variant="light" onPress={onClose}>
                  Close
                </Button> */}
              <p className="font-Lato text-lg">
                Subscribe to newsletter about therapy
              </p>
            </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

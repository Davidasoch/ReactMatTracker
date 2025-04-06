'use client'
import { useRouter } from "next/navigation";
import { ReactNode } from "react"

export default function Modal({
  children,
}: {
  children: ReactNode;
}) {

  const router = useRouter();

  function closeModal() {
    router.back()
  }

  return (
    <div role="dialog">
      <div className="backdrop">
        <div className="modal">
          <span className="flex justify-end cursor-pointer" onClick={closeModal}>
            X
          </span>
          <div>
            {children}
          </div>
        </div>
        <style jsx>{`
              :global(body) {
                overflow: hidden;
              }

              .backdrop {
                position: fixed;
                background-color: rgba(0, 0, 0, 0.7);
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
              }

              .modal {
                background-color: white;
                position: absolute;
                top: 10%;
                right: 10%;
                bottom: 10%;
                left: 10%;
                padding: 1em;
              }
            `}</style>
      </div>


    </div>
  )

}
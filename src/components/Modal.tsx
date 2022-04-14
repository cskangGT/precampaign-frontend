import React, { useState } from 'react';
import styled from '@emotion/styled';

export default function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
    console.log(modal);
  };

  return (
    <>
      <ModalOpen onClick={toggleModal}>Open</ModalOpen>
      {modal && (
        <ModalWindow>
          <Overlay onClick={toggleModal}></Overlay>
          <ModalContent>
            <h2>Hello Modal</h2>
            {/* <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed pariatur iste nihil dolore? Molestiae cum
              architecto, iure neque at maiores! Corporis animi ab velit natus hic deleniti ipsa a tempora ullam, nemo
              eius itaque ex ut, eveniet necessitatibus omnis aliquam quod dicta reiciendis illum quas? Sequi
              accusantium dolorem ipsum esse, perferendis aspernatur aliquid porro ea earum veritatis sed. Rerum nihil
              voluptate culpa eaque consequatur, aperiam eius minima aut nobis! Tempora eligendi quasi, nesciunt
              deleniti aut quaerat consequuntur saepe quod iusto sunt blanditiis assumenda hic porro omnis nostrum
              molestias. Quis odit optio assumenda doloribus repellendus dolorum animi quisquam nobis voluptas magnam
              obcaecati, ut possimus a fugiat nam, deserunt earum enim! Error voluptatum doloribus quis illo, quisquam
              architecto similique rerum commodi libero praesentium laborum animi tempora? Impedit exercitationem,
              molestiae cupiditate unde quasi sunt numquam vero non maxime eius dolor, dignissimos suscipit nemo autem
              fuga rerum doloremque. Incidunt eos magnam molestiae ad illo perspiciatis sint? A minus earum architecto
              amet maxime. Amet eveniet, necessitatibus excepturi saepe dolorum ut consectetur omnis magnam voluptatem
              sit, molestiae eum. Possimus, adipisci illum beatae non explicabo ratione voluptas provident! Vitae sed
              quia aperiam maiores illo animi nemo, tenetur commodi nam quam aspernatur quasi corporis itaque non omnis
              provident.
            </p> */}
            <ModalClose onClick={toggleModal}>Close</ModalClose>
          </ModalContent>
        </ModalWindow>
      )}
    </>
  );
}

const ModalOpen = styled.button`
  padding: 10px 20px;
  display: block;
  margin: 100px auto 0;
  font-size: 18px;
`;

const ModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 7px;
`;

const ModalWindow = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  overflow-y: hidden;
`;

const Overlay = styled(ModalWindow)`
  background: rgba(49, 49, 49, 0.8);
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
`;

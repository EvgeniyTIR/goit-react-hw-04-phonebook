import { Button, Title } from 'components/ContactList/ConstactList.styled';

export const ContactList = ({ data, children, deleteContact }) => {
  return (
    <>
      <Title>Contacts</Title>
      {children}
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {' '}
            {item.name}: {item.number}
            <Button
              type="button"
              id={item.number}
              onClick={() => deleteContact(item.id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

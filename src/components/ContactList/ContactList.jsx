import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { List, Item } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();


  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };


  if (!filteredContacts?.length) {
    return <p>No contacts found.</p>;
  }


  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </Item>
      ))}
    </List>
  );
};


export default ContactList;

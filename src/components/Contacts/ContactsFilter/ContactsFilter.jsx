import {
  Label,
  Input,
} from 'components/Contacts/ContactsForm/ContactsForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilterValue } from 'redux/contacts/selectors';
import { setFilterValue } from 'redux/contacts/slice/filterSlice';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);

  const onChange = e => {
    dispatch(setFilterValue(e.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by Name:
      <Input type="text" value={filterValue} onChange={onChange} />
    </Label>
  );
};

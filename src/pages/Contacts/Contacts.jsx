import { Section } from 'components/Contacts/Section/Section';
import { ContactsForm } from 'components/Contacts/ContactsForm/ContactsForm';
import { ContactsList } from 'components/Contacts/ContactsList/ContactsList';
import { ContactsFilter } from 'components/Contacts/ContactsFilter/ContactsFilter';
import { Wrapper } from './Contacts.styled';

const Contacts = () => {
  return (
    <Wrapper>
      <Section title="Phonebook">
        <ContactsForm />
      </Section>
      <Section title="Contacts">
        <ContactsFilter />
        <ContactsList />
      </Section>
    </Wrapper>
  );
};

export default Contacts;

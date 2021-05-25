import axios from 'axios'

const ContactAPI = {
  createContact: contact => axios.post('/api/contact', contact)
}

export default ContactAPI
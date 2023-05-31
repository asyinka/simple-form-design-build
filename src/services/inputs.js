export default class formDetails {
  constructor() {
    this.formData = [];
    this.id = 0;
  }

  createFormData(userName, userText, userTopic) {
    const userInputs = {
      userName: userName,
      userText: userText,
      userTopic: userTopic,
      id: ++this.id,
    };
    this.formData.push(userInputs);
  }

  getFormDetails() {
    return this.formData;
  }
}

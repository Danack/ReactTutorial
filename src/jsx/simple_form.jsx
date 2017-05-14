import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SimpleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      question: '',
      email_error: '',
      question_error: '',
      value: '',
      user_result: '',
      math_error: ''
    };
  }

  checkMaths(user_result) {
    let calc_result;
    if (this.props.maths.operand === 'times') {
      calc_result = this.props.maths.x * this.props.maths.y;
    }

    let user_result_trimmed = user_result.trim();
    if (user_result_trimmed.length == 0) {
      this.setState({math_error: ""});
    }

    if ("" + calc_result == user_result_trimmed) {
      this.setState({math_error: ""});
      return;
    }
    this.setState({math_error: "Nope, that's wrong"});
  }

  // cityUpdateHandler(city) {
  //   this.setState({
  //     timeoutID: undefined,
  //   });
  //
  //   const success_callback = (data) => {
  //     this.setState({weather_conditions: data})
  //   };
  //
  //   this.props.weather_fetcher(city, success_callback);
  // }

  handleMathsChange(event) {
    this.setState({user_result: event.target.value});
    this.checkMaths(event.target.value);
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }
  handleQuestionChange(event) {
    this.setState({question: event.target.value});
  }

  formValidate()  {
    let params = "email=" + encodeURI(this.state.email)
      + "&question=" + encodeURI(this.state.question);
    fetch('/ReactJsIntro/validateForm.php?' + params)
      .then(handleErrors)
      .then((response) => response.json())
      .then((data) => {
          this.setState({
            email_error: data.email_error,
            question_error: data.question_error,
          })
        }
      )
      .catch((err) => {
        alert('error:' + err);
    });
  }


  render() {
    let math_error_notice = "";
    if (this.state.math_error.length != 0) {
      math_error_notice = <img src="/images/Wrong.gif" />
    }

    let submitElement = <input type="submit" value="Submit" />
    if (this.state.email.length == 0 ||
      this.state.question.length == 0 ||
      this.state.user_result.length == 0 ||
      this.state.math_error.length != 0) {
      submitElement = "Fill in all fields please"
    }
    return (
      <div>
        <div>{this.state.email_error}</div>
        <div><input type="text" placeholder="Email" value={this.state.email}
          onChange={(e) => this.handleEmailChange(e)} size="50"
          onBlur={() => this.formValidate()}/> </div>

        <div>{this.state.question_error}</div>
        <div>
          <textarea placeholder="Ask your question" value={this.state.question}
                    onChange={(e) => this.handleQuestionChange(e)}
                    rows="4" cols="50"/>
        </div>
        <div>What is 2 times 4?</div>
        <div>
          <input type="text" placeholder=""
             value={this.state.user_result}
             onChange={(e) => this.handleMathsChange(e)}/>
          <span><br/>{math_error_notice}</span>
        </div>

        <div>{submitElement}</div>
      </div>
    );
  }
}

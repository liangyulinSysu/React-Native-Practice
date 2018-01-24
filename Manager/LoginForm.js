import React, {Component} from 'react';
import { Card, CardSection, Input, Button, LoadingComponent } from './Components';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from './Actions';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  onChangeEmail(email) {
    this.props.emailChanged(email);
  };

  onChangePassword(password) {
    this.props.passwordChanged(password);
  };

  onLogin = () => {
    // this.setState({ password: password})
    const { email, password } = this.props;
    this.props.loginUser({email, password});
  }

  renderError() {
    if(this.props.error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
  }

  renderLoading() {
    if(this.props.loading) {
      return (
        <LoadingComponent />
      )
    }
  }

  render() {
    return(
      <Card style={{flex: 1}}>
        <CardSection>
          <Input
            label='Email'
            defaultText='email@email.com'
            contentText={this.props.email}
            onChangeText={this.onChangeEmail.bind(this)}
          />

        </CardSection>

        <CardSection>
          <Input
            label='Password'
            defaultText='password'
            onChangeText={this.onChangePassword.bind(this)}
            contentText={this.props.password}
            isSecure={true}
          />
        </CardSection>

        {this.renderError()}
        <CardSection>
          <Button title="Login in" onPress={this.onLogin}/>
        </CardSection>
        {this.renderLoading()}
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);

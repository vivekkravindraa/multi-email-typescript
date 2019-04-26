import * as React from 'react';
import { ReactMultiEmail, isEmail } from 'react-multi-email';
import 'react-multi-email/style.css';

interface IProps { }
interface IState {
	emails: string[];
}
class Basic extends React.Component<IProps, IState> {
	state = {
		emails: []
	};

	render() {
		const { emails } = this.state;

		return (
			<>
				<h3>Email(s)</h3>
				<ReactMultiEmail
					placeholder=""
					emails={emails}
					onChange={(_emails: string[]) => {
						this.setState({ emails: _emails });
					}}
					validateEmail={email => {
						return isEmail(email);
					}}
					getLabel={(
						email: string,
						index: number,
						removeEmail: (index: number) => void,
					) => {
						return (
							<div data-tag key={index}>
								{email}
								<span
									data-tag-handle
									onClick={() => removeEmail(index)}
								>
									×
								</span>
							</div>
						);
					}}
				/>
			</>
		);
	}
}

export default Basic;

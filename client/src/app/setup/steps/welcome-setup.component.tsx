import React from 'react';

// export class WelcomeSetupComponent extends Component<ISomething<string>, any> {
//   constructor(props: ISomething<string>) {
//     super(props);
//     this.state = { value: '' };
//     console.log('dsjldfajldfas ', props);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event: ChangeEvent<HTMLInputElement>) {
//     this.setState({ value: event.target.value });
//   }

//   render() {

//   }
// }

export function WelcomeSetupComponent(): JSX.Element {
  return (
    <div>
      <h1 className="mb-5">
        A Tribute to you, Pepo.
        <br /> Welcome!
      </h1>
      <h4>
        Boost the growth of your business in a fair and <br />
        sustainable way, thanks to a new form of equity.
      </h4>
    </div>
  );
}
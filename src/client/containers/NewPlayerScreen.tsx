import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

export interface Props{
   onSubmit?:()=>{}
}

export class NewPlayerScreen extends React.Component<Props, any>{
   getInitialState() {
        
   }
}
export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
    return {
        enthusiasmLevel,
        name: languageName,
    }
}
export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPlayerScreen);
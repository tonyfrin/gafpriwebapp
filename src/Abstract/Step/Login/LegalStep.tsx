import React, { useEffect } from 'react';
import { css } from '@emotion/css';
import Select from 'react-select';
import { ButtonAppMobile } from '../../Button/ButtonAppMobile';
import { InputAppContainer } from '../../Input/InputAppContainer';
import { UseGafpriAttributesSingUpReturn } from '../../states/useGafpriAttributesSingUp';


const buttonAppMobileContentStyles = css`
    font-size: 1.5em;
    padding: 0.9em;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    text-align: center;
`

const loginContainerStyles = css`
    position: fixed;
    bottom: 10%;
    left: 0;
    right: 0;
    z-index: 996;
`;

const loginContentStyles = css`
    display: flex;
    flex-direction: column;
`;

const containerInput = css`
    margin: 20px auto;
`

const selectStyles = css`
    width: 90%;
    margin: auto;
    font-family: 'Poppins', sans-serif;

    ::placeholder {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }
`
    

type LegalStepProps = {
    nextStep: () => void;
    attributes: UseGafpriAttributesSingUpReturn;
}


export const LegalStep = ({
    nextStep,
    attributes
}: LegalStepProps) => {
    const [InputTypeDocumentIdId, setInputTypeDocumentIdId] = React.useState(<></>);
    const [InputIndex, setInputIndex] = React.useState(<></>);

    useEffect(() => {

        setInputIndex(() => (
            <Select 
                options={attributes.states.indexOptions}
                defaultValue={attributes.states.indexDefault}
                className={selectStyles}
                onChange={(e) => attributes.actions.changeIndex(e)}
            />
        ))

        setInputTypeDocumentIdId(() => (
            <Select 
                options={attributes.states.typeDocumentIdIdOptions}
                defaultValue={attributes.states.typeDocumentIdIdDefault}
                className={selectStyles}
                onChange={(e) => attributes.actions.changeTypeDocumentIdId(e)}
            />
        ))
    }, []); // eslint-disable-line

    useEffect(() => {
        attributes.actions.validationTypeDocumentIdId(attributes.states.typeDocumentIdId);
        attributes.actions.validationIndex(attributes.states.index);
        attributes.actions.validationDigit(attributes.states.digit);
    }, [ attributes.states.typeDocumentIdId, attributes.states.index, attributes.states.digit ]); // eslint-disable-line

    useEffect(() => {
        attributes.actions.validationButtonStep6();
    }, [ attributes.states.typeDocumentIdId, attributes.states.typeDocumentIdIdValid, attributes.states.index, attributes.states.indexValid, attributes.states.digit, attributes.states.digitValid ]); // eslint-disable-line

    const next = () => {
        if (attributes.actions.validationButtonStep6()) {
            nextStep();
        }
    }

  return (
    <>
        <div>
            <h1 className={buttonAppMobileContentStyles}>Tu documento Legal</h1>
        </div>
            <div className={containerInput}>
                {InputTypeDocumentIdId}
            </div>
            <div className={containerInput}>
                {InputIndex}
            </div>
                <InputAppContainer 
                    inputProps={{
                        type: 'number',
                        placeholder: 'Numero de documento',
                        onChange: (e) => attributes.actions.changeDigit(e.target.value),
                        defaultValue: attributes.states.digit
                    }}
                />
            
        <div className={loginContainerStyles}>
            <div className={loginContentStyles}>
                <ButtonAppMobile title="Continuar" 
                    containerProps={{
                        onClick: () => next(),
                        id: 'btn-step-6'
                    }}
                />
            </div>
        </div>
     </>
  );
}

import React from 'react';
import { css } from '@emotion/css';
import { Layout } from '../../Component/Layout';
import { EmailStep } from './EmailStep';
import { EmailCheckStep } from './EmailCheckStep';
import { PhoneStep } from './PhoneStep';
import { PhoneCheckStep } from './PhoneCheckStep';
import { NameStep } from './NameStep';
import { LegalStep } from './LegalStep';
import { SelfieStep } from './SelfieStep';
import { FinalStep } from './FinalStep';
import { useGafpriSingUp } from '../../states/useGafpriSingUp';
import { FadeIn } from '../../Fade/FadeIn';
import { LegalPhotoStep } from './LegalPhotoStep';
import { ProgressBar } from '../../Bar/ProgressBar';
import { FiChevronLeft } from 'react-icons/fi';
import Link from 'next/link';

const progressBarContainerStyles = css`
    display: flex;
    margin: 20px auto;
`

const arrowStyle = css`
    font-size: 1.5rem;
    color: #314577;
    margin: auto;
    width: 10%;
`

export const MainStep = () => {
  const { pages, attributes } = useGafpriSingUp();

  const returnStep = () => {
    if (pages.states.isEmail) {
      return <Link href="/login" />;
    } else if (pages.states.isEmailCheck) {
      pages.actions.onEmail();
    } else if (pages.states.isPhone) {
      pages.actions.onEmailCheck();
    } else if (pages.states.isPhoneCheck) {
      pages.actions.onPhone();
    } else if (pages.states.isName) {
      pages.actions.onPhoneCheck();
    } else if (pages.states.isLegal) {
      pages.actions.onName();
    } else if (pages.states.isPhotoLegal) {
      pages.actions.onLegal();
    } else if (pages.states.isSelfie) {
      pages.actions.onPhotoLegal();
    }
  };

 
  let percentage = 0;

    if (pages.states.isEmail) {
      percentage = (1/8) * 100;
    } else if (pages.states.isEmailCheck) {
      percentage = (2/8) * 100;
    } else if (pages.states.isPhone) {
      percentage = (3/8) * 100;
    } else if (pages.states.isPhoneCheck) {
      percentage = (4/8) * 100;
    } else if (pages.states.isName) {
      percentage = (5/8) * 100;
    } else if (pages.states.isLegal) {
      percentage = (6/8) * 100;
    } else if (pages.states.isPhotoLegal) {
      percentage = (7/8) * 100;
    } else if (pages.states.isSelfie) {
      percentage = (8/8) * 100;
    }

  return (
    <>
     <Layout
        containerStyles={{
            custom: `
                background-color: #f9f9f9;
            `,
        }}
     ><>

     

      <div className={progressBarContainerStyles}>
          {!pages.states.isEmail && !pages.states.isFinal &&
            <FiChevronLeft 
                className={arrowStyle}
                onClick={returnStep}
            />
          }
          {!pages.states.isFinal && 
            <div style={{width: '90%'}}>
                <ProgressBar percentage={percentage} />
            </div>
          }
      </div>

     {pages.states.isFetching && <div>Fetching...</div>}

     {pages.states.isEmail && (
        <FadeIn keyName="isEmail" isVisible={pages.states.isEmail}>
          <EmailStep 
            nextStep={pages.actions.onEmailCheck}
            attributes={attributes}
          />
        </FadeIn>
      )}

      {pages.states.isEmailCheck && (
        <FadeIn keyName="isEmailCheck" isVisible={pages.states.isEmailCheck}>
          <EmailCheckStep 
            pages={pages}
            attributes={attributes}
          />
        </FadeIn>
      )}

      {pages.states.isPhone && 
        <FadeIn keyName="isPhone" isVisible={pages.states.isPhone}>
          <PhoneStep 
            nextStep={pages.actions.onPhoneCheck}
            attributes={attributes}
          />
        </FadeIn>
      }

      {pages.states.isPhoneCheck &&
        <FadeIn keyName="isPhoneCheck" isVisible={pages.states.isPhoneCheck}>
          <PhoneCheckStep 
             pages={pages}
             attributes={attributes}
          />
        </FadeIn>
      }

      {pages.states.isName &&
        <FadeIn keyName="isName" isVisible={pages.states.isName}>
          <NameStep 
            nextStep={pages.actions.onLegal}
            attributes={attributes}
          />  
        </FadeIn>
      }
      
      {pages.states.isLegal &&
        <FadeIn keyName="isLegal" isVisible={pages.states.isLegal}>
          <LegalStep 
            nextStep={pages.actions.onPhotoLegal}
            attributes={attributes}
          />
        </FadeIn>
      }

      {pages.states.isPhotoLegal &&
        <FadeIn keyName="isPhotoLegal" isVisible={pages.states.isPhotoLegal}>
          <LegalPhotoStep 
            nextStep={pages.actions.onSelfie}
            attributes={attributes}
          />
        </FadeIn>
      }

      {pages.states.isSelfie &&
        <FadeIn keyName="isSelfie" isVisible={pages.states.isSelfie}>
          <SelfieStep 
            nextStep={pages.actions.onFinal}
            attributes={attributes}
          />
        </FadeIn>
      }

      {pages.states.isFinal &&
        <FadeIn keyName="isFinal" isVisible={pages.states.isFinal}>
          <FinalStep />
        </FadeIn>
      }

     </>
    </Layout>
    </>
  );
}

import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Text, Spinner } from '@aliumswap/uikit'
import { AutoColumn } from '../Column'
import Circle from '../../assets/images/blue-loader.svg'
import { Wrapper, Section, ConfirmedIcon, ContentHeader } from './helpers'


type ConfirmationPendingContentProps = { onDismiss: () => void; pendingText: string }

const CustomLightSpinner = styled<any>(Spinner)<{ size: string }>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`

const ConfirmationPendingContent = ({ onDismiss, pendingText }: ConfirmationPendingContentProps) => {
  const {t} = useTranslation();
  return (
    <Wrapper>
      <Section>
        <ContentHeader onDismiss={onDismiss}>{t('waitingForConfirmation')}</ContentHeader>
        <ConfirmedIcon>
          <CustomLightSpinner src={Circle} alt="loader" size="90px" />
        </ConfirmedIcon>
        <AutoColumn gap="12px" justify="center">
          <AutoColumn gap="12px" justify="center">
            <Text fontSize="14px">
              <strong>{pendingText}</strong>
            </Text>
          </AutoColumn>
          <Text fontSize="14px">{t('confirmInWallet')}</Text>
        </AutoColumn>
      </Section>
    </Wrapper>
  )
}

export default ConfirmationPendingContent

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import OtherHeader from '../../components/Header/OtherHeader';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import WalletCard from '../../components/Icons/WalletCard';
import Rupee from '../../components/Icons/Rupee';
import BodyRegular from '../../components/common/Text/Body/BodyRegular';
import ArrowUp from '../../components/Icons/ArrowUp';
import { COLORS } from '../../constants';
import ArrowDown from '../../components/Icons/ArrowDown';

const WalletScreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <OtherHeader text="My wallet">
        <ArrowLeft />
      </OtherHeader>
      <View style={styles.cardContainer}>
        <WalletCard />
        <View style={styles.availableMoney}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Rupee height={23} width={23} />
            <BodyRegular
              text="120.00"
              textStyles={{ fontWeight: '700', fontSize: 35, marginBottom: 4 }}
            />
          </View>
          <BodyRegular
            text="Available balance"
            textStyles={{ textAlign: 'center', fontSize: 12 }}
          />
        </View>
      </View>
      <View
        style={[styles.transactionContainer, { height: isOpen ? 'auto' : 40 }]}>
        <Pressable
          onPress={() => setIsOpen(prev => !prev)}
          style={[
            styles.viewTransactionContainer,
            { borderBottomWidth: isOpen ? 1 : 0 },
          ]}>
          <BodyRegular
            text="View wallet transactions"
            textStyles={{ fontWeight: '700' }}
          />
          <TouchableOpacity
            style={{ padding: 5 }}
            onPress={() => setIsOpen(prev => !prev)}>
            {isOpen ? <ArrowDown /> : <ArrowUp />}
          </TouchableOpacity>
        </Pressable>
        {isOpen && (
          <View style={styles.transactionContent}>
            <View style={styles.transaction}>
              <BodyRegular text="21-04-21" />
              <BodyRegular text="Credit" />
              <View style={styles.align}>
                <Rupee height={11} />
                <BodyRegular text="100.00" textStyles={{ marginBottom: 2 }} />
              </View>
            </View>
            <View style={styles.transaction}>
              <BodyRegular text="21-04-21" />
              <BodyRegular text="Credit" />
              <View style={styles.align}>
                <Rupee height={11} />
                <BodyRegular text="100.00" textStyles={{ marginBottom: 2 }} />
              </View>
            </View>
            <View style={styles.transaction}>
              <BodyRegular text="21-04-21" />
              <BodyRegular text="Credit" />
              <View style={styles.align}>
                <Rupee height={11} />
                <BodyRegular text="100.00" textStyles={{ marginBottom: 2 }} />
              </View>
            </View>
            <View style={styles.transaction}>
              <BodyRegular text="21-04-21" />
              <BodyRegular text="Credit" />
              <View style={styles.align}>
                <Rupee height={11} />
                <BodyRegular text="100.00" textStyles={{ marginBottom: 2 }} />
              </View>
            </View>
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    position: 'relative',
    marginTop: 37,
    marginHorizontal: 49,
    justifyContent: 'center',
    alignItems: 'center',
  },
  availableMoney: {
    position: 'absolute',
  },
  transactionContainer: {
    marginHorizontal: 49,
    marginTop: 61,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 5,
  },
  viewTransactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: COLORS.primary100,
    paddingVertical: 10,
    borderColor: COLORS.primary,
  },
  transactionContent: {
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  align: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default WalletScreen;

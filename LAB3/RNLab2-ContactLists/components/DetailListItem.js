import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import colors from '../utility/colors';

const DetailListItem = ({ icon, title, subtitle }) =>
{
    return(
        <View style={StyleSheet.borderContainer}>
            <View style={StyleSheet.wrapper}>
                <View style={styles.container}>
                    {icon && (
                        <Icon
                        name={icon}
                        size={24}
                        style={{
                            color:color.back,
                            marginRight: 20,
                        }}
                        />
                    )}
                    <View style={styles.contentContainer}>
                        <Text style={[styles.title]}>{title}</Text>
                        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                    </View>
                </View>
            </View>
        </View>
    );
}

export default DetailListItem;

DetailListItem.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

const styles = StyleSheet.create({
    borderContainer: {
        paddingLeft: 24,
    },
    wrapper: {
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 24,
        borderBottomColor: colors.grey,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentContainer: {
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        color: colors.back,
        fontWeight: 'bold',
        fontSize: 16,
    },
    subtitle: {
        color: colors.blue,
        fontSize: 15,
        marginTop: 4,
    },
});
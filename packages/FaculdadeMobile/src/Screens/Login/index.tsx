import React from 'react'
import { Button, SafeAreaView, ScrollView, StatusBar, Text, TextInput, TextInputProps, View } from 'react-native'


function Input(props: TextInputProps & { label?: React.ReactNode }) {
    const { label, ...others } = props;
    return (
        <View style={{ padding: 8, borderRadius: 5, marginBottom: 16, }}>
            <Text>
                {label}
            </Text>
            <TextInput {...others} />
        </View>
    )
}

export default function Login() {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <View style={{ paddingHorizontal: 16, paddingVertical: 50 }}>
                        <Input
                            label="Email"
                            onChangeText={(text) => console.log(text)}
                        />
                        <Input
                            label="Nome"
                            onChangeText={(text) => console.log(text)}
                        />
                        <Button
                            onPress={() => console.log('ok')}
                            title="enviar"
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

// const styles = StyleSheet.create

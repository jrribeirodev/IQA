import React from 'react';
import {View,Text, ScrollView,Image, TextInput, TouchableOpacity} from 'react-native';
import { styles } from '../../styles'
export default() => {
    const [altitude, setAltitude] = useState('');
    const [temperatura, setTemperatura] = useState('');
    const [od, setOd] = useState('');
    const [coli, setColi] = useState('');
    const [ph, setPh] = useState('');
    const [dbo5, setDbo5] = useState('');
    const [nitrogenio, setNitrogenio] = useState('');
    const [fosforo, setFosforo] = useState('');
    const [turbidez, setTurbidez] = useState('');
    const [solidos, setSolidos] = useState('');

        return(
            <View style={styles.body}>
                <View style={styles.areaImage} >
                    <Image style={styles.image} source={require('../assets/logo_150.png')}/>
                </View>
                <ScrollView style={styles.areaScroll}>
                    <View style={styles.areaInfo}>
                    <Text style={styles.inputText}>Altitude(m)</Text>
                    <TextInput style={styles.input}/>
                    <Text style={styles.inputText}>Temperatura(°C)</Text>
                    <TextInput style={styles.input}/>
                    <Text style={styles.inputText}>OD da Amostra(mg/l)</Text>
                    <TextInput style={styles.input}/>
                    <Text style={styles.inputText}>Coli Termotolerantes</Text>
                    <TextInput style={styles.input}/>
                    <Text style={styles.inputText}>pH</Text>
                    <TextInput style={styles.input}/>
                    <Text style={styles.inputText}>DBO5</Text>
                    <TextInput style={styles.input}/>
                    <Text style={styles.inputText}>Nitrogênio Total</Text>
                    <TextInput style={styles.input}/>
                    <Text style={styles.inputText}>Fósforo Total</Text>
                    <TextInput style={styles.input}/>
                    <Text style={styles.inputText}>Turbidez</Text>
                    <TextInput style={styles.input}/>
                    <Text style={styles.inputText}>Sólidos</Text>
                    <TextInput style={styles.input}/>
                    <TouchableOpacity style={styles.calcularButtonArea} onPress={''}>
                        <Text style={styles.buttonText}>Calcular</Text>
                    </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    
}
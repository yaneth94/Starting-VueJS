<template>
    <v-container>
        <v-row wrap>
            <v-col>
                <v-btn>Texto</v-btn>
                <v-btn color="primary ml-2">Texto</v-btn>
                <v-btn color="blue ml-2" dark>Texto</v-btn>
                <v-btn color="secondary ml-2" text>Sin Fondo</v-btn>
                <v-btn color="warning ml-2" large>Largo</v-btn>
                <v-btn color="error ml-2" dark large>Large Button</v-btn>
                <v-btn color="warning ml-2" small>Pequeño</v-btn>
                <v-btn color="warning ml-2" :disabled="true">Disabled</v-btn>
                <v-btn color="primary ml-2" small dark>
                    <v-icon>home</v-icon>
                </v-btn>
                <v-btn color="primary ml-2"  small dark>
                     <v-icon>forum</v-icon>
                </v-btn>
                 <v-btn color="primary ml-2" small icon text>
                     <v-icon>forum</v-icon>
                </v-btn>
                <v-btn color="primary ml-2" small fab dark>
                     <v-icon>forum</v-icon>
                </v-btn>
                <v-btn color="primary ml-2" large fab dark>
                     <v-icon>forum</v-icon>
                </v-btn>
                <v-btn color="secondary" dark>
                    Texto 
                    <v-icon>forum</v-icon>
                </v-btn>
                 <v-btn color="secondary ml-2" dark>
                    Texto 
                    <v-icon class="ml-2">forum</v-icon>
                </v-btn>
                 <v-btn color="secondary ml-2" dark>
                    Texto 
                    <v-icon right>forum</v-icon>
                </v-btn>
                 <v-btn color="secondary ml-2" dark>
                    <v-icon left>forum</v-icon>
                    Texto 
                </v-btn>
                 <v-btn color="secondary ml-2" outlined>
                    <v-icon left>forum</v-icon>
                    Texto 
                </v-btn>
                 <v-btn color="secondary ml-2" outlined block>
                    <v-icon left>forum</v-icon>
                    Texto 
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
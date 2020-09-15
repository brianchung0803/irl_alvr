define({
    "customVideoScale": "Personalizzato",
    "_root_video_tab.name": "Video",
    "_root_video_tab.description": "Impostazioni video",
    "_root_audio_tab.name": "Audio",
    "_root_audio_tab.description": "Impostazioni audio",
    "_root_headset_tab.name": "Visore",
    "_root_connection_tab.name": "Connessione",
    "_root_video_adapterIndex.name": "Indice adapter",
    "_root_video_adapterIndex.description": "Indice che identifica la GPU",
    "_root_video_refreshRate.name": "FPS",
    "_root_video_refreshRate.description": "FPS del visore",
    "_root_video_encodeBitrateMbs.name": "Bitrate per il video",
    "_root_video_encodeBitrateMbs.description": "Bitrate della trasmissione video. È consigliato 30Mbps. \nUn bitrate più alto comporta una qualità migliore dell'immagine ma al costo di una maggiore latenza e traffico di rete.",
    "_root_video_force60hz.name": "Forza 60Hz",
    "_root_video_force60hz.description": "Forza l'aggiornamento dell'immagine a 60 FPS",
    "_root_video_resolutionDropdown.name": "Risoluzione video",
    "_root_video_resolutionDropdown.description": `100% corrisponde alla risoluzione nativa di 2880x1600 dell'Oculus Quest.
    Impostare la risoluzione può migliorare marginalmente la qualità dell'immagine ma non è consigliato.
    Una risoluzione minore di 100% può risurre la latenza e migliorare la qualità di trasmissione`,
    "_root_video_renderResolution-choice-.name": "Risoluzione video",
    "_root_video_renderResolution_scale-choice-.name": "Usa fattore di scala",
    "_root_video_renderResolution_scale-choice-.description": "Fattore di scala della risoluzione video",
    "_root_video_renderResolution_scale.name": "Scala",
    "_root_video_renderResolution_scale.description": "Fattore di scala del video",
    "_root_video_renderResolution_absolute-choice-.name": "Usa valore assoluto",
    "_root_video_renderResolution_absolute-choice-.description": "Usa valore assoluto per la risoluzione video",
    "_root_video_renderResolution_absolute_absolute.name": "Valore assoluto per la risoluzione",
    "_root_video_renderResolution_absolute_absolute.description": "Valore assoluto per la risoluzione",
    "_root_video_renderResolution_absolute_width.name": "Larghezza video",
    "_root_video_renderResolution_absolute_width.description": "Larghezza in pixel del video codificato",
    "_root_video_renderResolution_absolute_height.name": "Altezza video",
    "_root_video_renderResolution_absolute_height.description": "Altezza in pixel del video codificato",
    "_root_video_recommendedTargetResolution-choice-.name": "Risoluzione fotogrammi preferita",
    "_root_video_recommendedTargetResolution-choice-.description": "Risoluzione richiesta a SteamVR per il rendering",
    "_root_video_recommendedTargetResolution_scale-choice-.name": "Usa fattore di scala",
    "_root_video_recommendedTargetResolution_scale.name": "Scala",
    "_root_video_recommendedTargetResolution_scale.description": "scala",
    "_root_video_recommendedTargetResolution_absolute-choice-.name": "Usa valore assoluto",
    "_root_video_recommendedTargetResolution_absolute_absolute.name": "Usa valore assoluto per la risoluzione video",
    "_root_video_recommendedTargetResolution_absolute_width.name": "Larghezza fotogrammi",
    "_root_video_recommendedTargetResolution_absolute_width.description": "Larghezza preferita in pixel dei fotogrammi",
    "_root_video_recommendedTargetResolution_absolute_height.name": "Altezza fotogrammi",
    "_root_video_recommendedTargetResolution_absolute_height.description": "Altezza preferita in pixel dei fotogrammi",
    "_root_video_eyeFov.name": "FOV",
    "_root_video_eyeFov.description": "Dimensione campo visivo per ogni occhio",
    "_root_video_eyeFov_0_eyeFov_0.name": "Occhio sinistro",
    "_root_video_eyeFov_0_eyeFov_0.description": "Angoli per l'occhio sinistro",
    "_root_video_eyeFov_0_left.name": "lato sinistro",
    "_root_video_eyeFov_0_left.description": "lato sinistro in gradi",
    "_root_video_eyeFov_0_right.name": "lato destro",
    "_root_video_eyeFov_0_right.description": "lato destro in gradi",
    "_root_video_eyeFov_0_top.name": "lato superiore",
    "_root_video_eyeFov_0_top.description": "lato superiore in gradi",
    "_root_video_eyeFov_0_bottom.name": "lato inferiore",
    "_root_video_eyeFov_0_bottom.description": "lato inferiore in gradi",
    "_root_video_eyeFov_1_eyeFov_1.name": "Occhio destro",
    "_root_video_eyeFov_1_eyeFov_0.description": "Angoli per l'occhio destro",
    "_root_video_eyeFov_1_left.name": "lato sinistro",
    "_root_video_eyeFov_1_left.description": "lato sinistro in gradi",
    "_root_video_eyeFov_1_right.name": "lato destro",
    "_root_video_eyeFov_1_right.description": "lato destro in gradi",
    "_root_video_eyeFov_1_top.name": "lato superiore",
    "_root_video_eyeFov_1_top.description": "lato superiore in gradi",
    "_root_video_eyeFov_1_bottom.name": "lato inferiore",
    "_root_video_eyeFov_1_bottom.description": "lato inferiore in gradi",
    "_root_video_secondsFromVsyncToPhotons.name": "Secondi dal VSync all'immagine sullo schermo",
    "_root_video_secondsFromVsyncToPhotons.description": "Tempo trascorso dal VSync virtuale all'immagine visibile sullo schermo del visore",
    "_root_video_ipd.name": "distanza interpupillare",
    "_root_video_ipd.description": "distanza tra gli occhi misurata dal centro delle pupille",
    "_root_video_foveatedRendering.name": "Foveated rendering",
    "_root_video_foveatedRendering.description": "Tecnica di rendering che riduce la risoluzione dell'immagine nella periferia della visione per ridurre il carico computazionale della GPU",
    "_root_video_foveatedRendering_enabled.name": "Abilita",
    "_root_video_foveatedRendering_enabled.description": `Tecnica di rendering che riduce la risoluzione dell'immagine nella periferia della visione per ridurre il carico computazionale della GPU, la quantità di dati da trasmettere, e la latenza. Questa impostazione può provocare una distorzione dell'immagine ai bordi.`,
    "_root_video_foveatedRendering_content_strength.name": "Intensità",
    "_root_video_foveatedRendering_content_strength.description": "A valori più alti corrisponde meno dettaglio ai bordi dell'immagine e più artefatti",
    "_root_video_foveatedRendering_content_shape.name": "Rapporto di forma",
    "_root_video_foveatedRendering_content_shape.description": "Forma del rettangolo centrale a risoluzione originale",
    "_root_video_foveatedRendering_content_verticalOffset.name": "Spostamento verticale",
    "_root_video_foveatedRendering_content_verticalOffset.description": "Spostamento verticale del rettangolo centrale a risouzione originale. Valori positivi corrispondono ad uno spostamento verso il basso.",
    "_root_video_colorCorrection.name": "Correzione del colore",
    "_root_video_colorCorrection.description": "Correzione del colore",
    "_root_video_colorCorrection_enabled.name": "Abilita",
    "_root_video_colorCorrection_enabled.description": "Le trasformazioni di colore sono applicate nel seguente ordine: sharpening, gamma, luminosità, contrasto, saturazione",
    "_root_video_colorCorrection_content_brightness.name": "Luminosità",
    "_root_video_colorCorrection_content_brightness.description": "Luminosità: -1 significa completamente nero e 1 significa completamente bianco",
    "_root_video_colorCorrection_content_contrast.name": "Contrasto",
    "_root_video_colorCorrection_content_contrast.description": "Contrasto: -1 significa completamente grigio",
    "_root_video_colorCorrection_content_saturation.name": "Saturazione",
    "_root_video_colorCorrection_content_saturation.description": "Saturazione: -1 significa l'immagine è in bianco e nero",
    "_root_video_colorCorrection_content_gamma.name": "Gamma",
    "_root_video_colorCorrection_content_gamma.description": "Gamma",
    "_root_video_colorCorrection_content_sharpening.name": "Sharpening",
    "_root_video_colorCorrection_content_sharpening.description": "Sharpening: mette in risalto i bordi nell'immagine",
    "_root_video_codec-choice-.name": "Codec video",
    "_root_video_codec-choice-.description": "Usa h265 se possibile per una migliore qualità video a bitrate più bassi",
    "_root_video_codec_H264-choice-.name": "h264",
    "_root_video_codec_H264-choice-.description": "Usa il codec h264",
    "_root_video_codec_HEVC-choice-.name": "HEVC (h265)",
    "_root_video_codec_HEVC-choice-.description": "Usa il codec HEVC (h265)",
    "_root_audio_gameAudio.name": "Trasmetti l'audio del gioco",
    "_root_audio_gameAudio.description": "Trasmetti l'audio del gioco al visore",
    "_root_audio_gameAudio_enabled.name": "unused",
    "_root_audio_gameAudio_enabled.description": "Abilita la trasmissione dell'audio del gioco al visore",
    "_root_audio_gameAudio_content_deviceDropdown.name": "Scegli il dispositivo audio",
    "_root_audio_gameAudio_content_deviceDropdown.description": "Dispositivo usato per catturare l'audio del gioco",
    "_root_audio_gameAudio_content_device.name": "Codice dispositivo",
    "_root_audio_gameAudio_content_device.description": "Dispositivo usato per catturare l'audio del gioco",
    "_root_audio_microphone.name": "Trasmetti microfono",
    "_root_audio_microphone.description": "Trasmetti l'audio del microfono dal visore al PC",
    "_root_headset_serialNumber.name": "Numero seriale",
    "_root_headset_serialNumber.description": "Numero seriale del visore simulato",
    "_root_headset_trackingSystemName.name": "Nome sistema di tracking",
    "_root_headset_trackingSystemName.description": "Nome del sistema di tracking",
    "_root_headset_modelNumber.name": "Numero modello",
    "_root_headset_modelNumber.description": "Numero modello del visore simulato",
    "_root_headset_driverVersion.name": "Versione driver",
    "_root_headset_driverVersion.description": "Versione driver simulato",
    "_root_headset_manufacturerName.name": "Nome ditta di fabbricazione",
    "_root_headset_manufacturerName.description": "Nome della ditta di fabbricazione del visore simulato",
    "_root_headset_renderModelName.name": "Nome modello",
    "_root_headset_renderModelName.description": "Nome del modello del visore simulato",
    "_root_headset_registeredDeviceType.name": "Tipo di dispositivo registrato",
    "_root_headset_registeredDeviceType.description": "Tipo di dispositivo registrato",
    "_root_headset_trackingFrameOffset.name": "Offset temporale del tracking",
    "_root_headset_trackingFrameOffset.description": "Offset temporale del tracking del visore usato dall'algoritmo di predizione della posa",
    "_root_headset_positionOffset.name": "Offset spaziale del visore",
    "_root_headset_positionOffset.description": "Offset spaziale del visore",
    "_root_headset_positionOffset_0.name": "x",
    "_root_headset_positionOffset_0.description": "Offset X",
    "_root_headset_positionOffset_1.name": "y",
    "_root_headset_positionOffset_1.description": "Offset Y",
    "_root_headset_positionOffset_2.name": "z",
    "_root_headset_positionOffset_2.description": "Offset Z",
    "_root_headset_useTrackingReference.name": "Usa distema di riferimento per il tracking",
    "_root_headset_useTrackingReference.description": "non utilizzato",
    "_root_headset_force3dof.name": "Modalità 3DOF",
    "_root_headset_force3dof.description": "Forza solo 3 gradi di libertà per il visore (solo rotazione)",
    "_root_headset_controllers.name": "Controller",
    "_root_headset_controllers.description": "unused",
    "_root_headset_controllers_enabled.name": "Abilita",
    "_root_headset_controllers_enabled.description": "Abilita l'uso dei controller",
    "_root_headset_controllers_content_trackingSystemName.name": "Nome sistema di tracking",
    "_root_headset_controllers_content_trackingSystemName.description": "Nome del sistema di tracking",
    "_root_headset_controllers_content_manufacturerName.name": "Nome ditta di fabbricazione",
    "_root_headset_controllers_content_manufacturerName.description": "Nome della ditta di fabbricazione del visore simulato",
    "_root_headset_controllers_content_modelNumber.name": "Numero modello",
    "_root_headset_controllers_content_modelNumber.description": "Numero del modello dei controller",
    "_root_headset_controllers_content_renderModelNameLeft.name": "Nome modello (controller sinistro)",
    "_root_headset_controllers_content_renderModelNameLeft.description": "Nome del modello della rappresentazione visuale del controller sinistro",
    "_root_headset_controllers_content_renderModelNameRight.name": "Nome modello (controller destro)",
    "_root_headset_controllers_content_renderModelNameRight.description": "Nome del modello della rappresentazione visuale del controller destro",
    "_root_headset_controllers_content_serialNumber.name": "Numero Seriale",
    "_root_headset_controllers_content_serialNumber.description": "Numero seriale dei controller simulati",
    "_root_headset_controllers_content_ctrlType.name": "Tipo controller",
    "_root_headset_controllers_content_ctrlType.description": "Tipo di controller simulati",
    "_root_headset_controllers_content_registeredDeviceType.name": "Tipo di dispositivo registrato",
    "_root_headset_controllers_content_registeredDeviceType.description": "Nome dei controller simulati",
    "_root_headset_controllers_content_inputProfilePath.name": "Percorso profilo input",
    "_root_headset_controllers_content_inputProfilePath.description": "Percorso del file del profilo per l'input dei controller",
    "_root_headset_controllers_content_triggerMode.name": "Codice trigger",
    "_root_headset_controllers_content_triggerMode.description": "non usato",
    "_root_headset_controllers_content_trackpadClickMode.name": "Codice click trackpad",
    "_root_headset_controllers_content_trackpadClickMode.description": "non usato",
    "_root_headset_controllers_content_trackpadTouchMode.name": "Codice tocco trackpad",
    "_root_headset_controllers_content_trackpadTouchMode.description": "non usato",
    "_root_headset_controllers_content_backMode.name": "Codice indietro",
    "_root_headset_controllers_content_backMode.description": "non usato",
    "_root_headset_controllers_content_recenterButton.name": "Codice pusante di ricentramento",
    "_root_headset_controllers_content_recenterButton.description": "non usato",
    "_root_headset_controllers_content_poseTimeOffset.name": "Offset temporale predizione posa",
    "_root_headset_controllers_content_poseTimeOffset.description": "Offset usato dall'algoritmo di predizine della posa dei controller",
    "_root_headset_controllers_content_positionOffsetLeft.name": "Offset spaziale",
    "_root_headset_controllers_content_positionOffsetLeft.description": "Offset della posizione (in metri) del controller sinistro. \n Per il controller destro, viene usato l'opposto del valore x",
    "_root_headset_controllers_content_positionOffsetLeft_0.name": "x",
    "_root_headset_controllers_content_positionOffsetLeft_0.description": "Offset X",
    "_root_headset_controllers_content_positionOffsetLeft_1.name": "y",
    "_root_headset_controllers_content_positionOffsetLeft_1.description": "offset Y",
    "_root_headset_controllers_content_positionOffsetLeft_2.name": "z",
    "_root_headset_controllers_content_positionOffsetLeft_2.description": "Offset Z",
    "_root_headset_controllers_content_rotationOffsetLeft.name": "Offset di rotazione",
    "_root_headset_controllers_content_rotationOffsetLeft.description": "Offset di rotazione in gradi per il controller sinistro.\nPer il controller destro, le rotazioni lungo l'asse Y e Z sono invertite",
    "_root_headset_controllers_content_rotationOffsetLeft_0.name": "x",
    "_root_headset_controllers_content_rotationOffsetLeft_0.description": "Y rotation",
    "_root_headset_controllers_content_rotationOffsetLeft_1.name": "y",
    "_root_headset_controllers_content_rotationOffsetLeft_1.description": "Y rotation",
    "_root_headset_controllers_content_rotationOffsetLeft_2.name": "z",
    "_root_headset_controllers_content_rotationOffsetLeft_2.description": "Z rotation",
    "_root_headset_controllers_content_hapticsIntensity.name": "Intensità feedback tattile",
    "_root_headset_controllers_content_hapticsIntensity.description": "Fattore per ridurre o aumentare l'intensità della vibrazione dei controller",
    "_root_headset_controllers_content_modeIdx.name": "Indice modalità",
    "_root_headset_controllers_content_modeIdx.description": "Indice modalità controller",
    "_root_connection_listenHost.name": "IP server",
    "_root_connection_listenHost.description": "IP usato dal server per ricevere pacchetti",
    "_root_connection_listenPort.name": "Porta server",
    "_root_connection_listenPort.description": "Porta usata dal server per ricevere pacchetti",
    "_root_connection_throttlingBitrateBits.name": "Limitazione bitrate",
    "_root_connection_throttlingBitrateBits.description": "Massimo bitrate consentito in bit",
    "_root_connection_sendingTimeslotUs.name": "Periodo di invio",
    "_root_connection_sendingTimeslotUs.description": "non usato",
    "_root_connection_limitTimeslotPackets.name": "Limita periodo di invio",
    "_root_connection_limitTimeslotPackets.description": "non usato",
    "_root_connection_clientRecvBufferSize.name": "Dimensione del buffer per il client",
    "_root_connection_clientRecvBufferSize.description": "Dimensione del buffer per il client.\n Dipende dal bitrate.\n È consigliato lasciare il valore calcolato. Se hai problemi di perdita di pacchetti, aumenta il valore.",
    "_root_connection_frameQueueSize.name": "Dimensione coda dei fotogrammi",
    "_root_connection_frameQueueSize.description": "Dimensione massima dellacoda dei fotogrammi usato dal client",
    "_root_connection_aggressiveKeyframeResend.name": "Reinvia i fotogrammi chiave in modo aggressivo",
    "_root_connection_aggressiveKeyframeResend.description": `Riduci l'intervallo di reinvio dei fotogrammi di tipo 'I' da 100ms a 5ms. Usato solo quando vengolo rilevata perdita di pacchetti. Migliora l'esperienza visuale in caso di perdita di pacchetti`,
    "_root_extra_tab.name": "Extra",
    "_root_extra_revertConfirmDialog.name": "Conferma reimpostazione valori",
    "_root_extra_revertConfirmDialog.description": "Chiedi conferma prima di reipostare i valori delle impostazioni al valore predefinito",
    "_root_extra_restartConfirmDialog.name": "Conferma riavvio SteamVR",
    "_root_extra_restartConfirmDialog.description": "Chiedi conferma prima di riavviare SteamVR.",
    "_root_extra_notificationLevel-choice-.name": "Grado di notifiche",
    "_root_extra_notificationLevel-choice-.description": "Grado di log al quale e al di sopra del quale viene generata una notifica.",
    "_root_extra_notificationLevel_warning-choice-.name": "Avviso",
    "_root_extra_notificationLevel_error-choice-.name": "Errore",
    "_root_extra_notificationLevel_info-choice-.name": "Informazione",
    "_root_extra_notificationLevel_debug-choice-.name": "Debug",
    "_root_extra_excludeNotificationsWithoutId.name": "Escludi notifiche senza ID",
    "_root_extra_excludeNotificationsWithoutId.description": "Non mostrare notifiche che non contengono la struttura ID",
    "_root_connection_disableThrottling.name": "Disabilita limiti per l'invio",
    "_root_connection_disableThrottling.description": "Disabilita limiti temporali per l'invio dei pacchetti.",
    "_root_connection_suppressFrameDrop.name": "Evita perdita di pacchetti",
    "_root_connection_suppressFrameDrop.description": "Prova ad evitare di perdere pacchtti",
    "_root_headset_headsetEmulationMode.name": "Modalità emulazione del visore",
    "_root_headset_headsetEmulationMode.description": "Scegli la modalità di emulazione del visore per migliorare la compatibilità con alcuni giochi",
    "_root_headset_controllers_content_controllerMode.name": "Modalità emulazione controller",
    "_root_headset_controllers_content_controllerMode.description": "Scegli la modalità di emulazione dei controller per migliorare la compatibilità con alcuni giochi, e scegli se attivare l'emulazione del grilletto con il tracking delle mani",
    "_root_connection_bufferOffset.name": "Offset del buffer",
    "_root_connection_bufferOffset.description": "Offset usato per aumentare o diminuire la dimensione del buffer calcolata per il client. La dimensione del buffer risulatante non sarà mai negativa."
});
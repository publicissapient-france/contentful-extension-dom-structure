export const ALERT = {
    ERROR_COPY_SECTION: "ERREUR : Impossible de copier la section. Cette action necessite l'accès au Local Storage de votre navigateur. Vérifiez que vous n'êtes pas en navigation privé.",
    ERROR_COPY_COMPONENTS: "ERREUR : Impossible de copier les composants. Cette action necessite l'accès au Local Storage de votre navigateur. Vérifiez que vous n'êtes pas en navigation privé.",
    ERROR_MEMORY_SECTION: "ERREUR : Pas de section en mémoire. \n Cette action necessite l'accès au Local Storage de votre navigateur. Vérifiez que vous n'êtes pas en navigation privé. ",
    ERROR_MEMORY_COMPONENTS: "ERREUR : Pas de composants en mémoire. \n Cette action necessite l'accès au Local Storage de votre navigateur. Vérifiez que vous n'êtes pas en navigation privé. ",
    SUCCESS_PAST_SECTION: "Section importée. Appuyer sur UPDATE pour enregistrer.",
    SUCCESS_PAST_COMPONENTS: "Composants importés. Appuyer sur UPDATE pour enregistrer.",
    SUCCESS_COPY_SECTION: "Section copiée.",
    SUCCESS_COPY_COMPONENTS: "Composants copiés.",
    SUCCESS_DUPLICATION: "Section dupliquée.",
    ERROR_COPY_COMPONENT: "ERREUR : Impossible de copier le composant. Cette action necessite l'accès au Local Storage de votre navigateur. Vérifiez que vous n'êtes pas en navigation privé.",
    SUCCESS_COPY_COMPONENT: "Composant copié.",
    SUCCESS_PAST_COMPONENT: "Composant importé. Appuyer sur UPDATE pour enregistrer.",
    ERROR_MEMORY_COMPONENT: "ERREUR : Pas de composant en mémoire. \n Cette action necessite l'accès au Local Storage de votre navigateur. Vérifiez que vous n'êtes pas en navigation privé. ",
    SUCCESS_DUPLICATION_COMPONENT: "Composant dupliqué."
}

export const notifierError = (extension, msg) => extension.notifier.error(msg);
export const notifierSuccess = (extension, msg) => extension.notifier.success(msg);

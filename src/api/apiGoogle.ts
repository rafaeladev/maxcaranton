import axios, { AxiosError } from 'axios';

// Lien vers les API Google
const apiGoogle =
    'https://script.google.com/macros/s/AKfycby0RbnvoaOpj-N3NA2VeWt_FtZAF09OIBNvz1EnGCcnbF_43qUFDcrwEKjA0EVDRnGE/exec';

// Interfaces TypeScript pour les types de données de l'API
interface APIError {
    message: string;
    statusText: string;
    status: number;
}

interface InfoItem {
    titre: string;
    contenu: string;
}

interface APIResponse {
    about: InfoItem[];
    coach: InfoItem[];
    contact: InfoItem[];
}

// Amélioration de la fonction getContent avec TypeScript
export async function getContent(id: string): Promise<APIResponse> {
    const url = `${apiGoogle}?action=get${id}`;

    try {
        const res = await axios.get<APIResponse>(url);

        // Axios lance automatiquement une erreur si le statut de la réponse est hors de la plage 200-299
        return res.data;
    } catch (error: unknown) {
        const e = error as AxiosError<APIError>;
        // Gestion des erreurs d'Axios ou d'erreurs réseau
        if (e.response) {
            // La requête a été faite et le serveur a répondu avec un statut hors de la plage 200
            throw {
                message: 'Failed to fetch photos',
                statusText: e.response.statusText,
                status: e.response.status,
            } as APIError;
        } else if (e.request) {
            // La requête a été faite mais aucune réponse n'a été reçue
            throw {
                message: 'No response from server',
                statusText: 'No Response',
                status: 500,
            } as APIError;
        } else {
            // Quelque chose s'est passé dans la configuration de la requête qui a déclenché une erreur
            throw {
                message: 'Error setting up the request',
                statusText: 'Setup Error',
                status: 500,
            } as APIError;
        }
    }
}

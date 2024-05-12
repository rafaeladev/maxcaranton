import { createContext, useState, useContext, ReactNode, FC } from 'react';

interface InfoItem {
    titre: string;
    contenu: string;
}

interface SiteData {
    about: InfoItem[];
    coach: InfoItem[];
    contact: InfoItem[];
}

interface SiteDataContextType {
    siteData: SiteData;
    setSiteData: (data: SiteData) => void;
}
const ContentContext = createContext<SiteDataContextType | undefined>(undefined);

export const useContentContext = () => {
    const context = useContext(ContentContext);
    if (!context) {
        throw new Error('useContentContext must be used within a ContentProvider');
    }
    return context;
};

export const ContentProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [siteData, setSiteData] = useState<SiteData>({
        about: [],
        coach: [],
        contact: [],
    });

    return (
        <ContentContext.Provider value={{ siteData, setSiteData }}>
            {children}
        </ContentContext.Provider>
    );
};

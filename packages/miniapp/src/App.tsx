import { useEffect, useState } from 'react';
import { Button } from './components/ui/button';
import { TelegramLoginWidget } from './components/TelegramLoginWidget';
import { useAuthTelegramWidget } from './lib/api';
import {
    getTelegramInitData,
    getTelegramUser,
    getTelegramWebApp,
    isTelegramMiniApp,
    type TelegramLoginWidgetPayload,
    type TelegramWebAppUser,
} from './lib/telegram';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

const TELEGRAM_BOT_USERNAME =
    import.meta.env.VITE_TELEGRAM_BOT_USERNAME ?? 'manager_v_one_family_bot';

function applyPayloadToFields(
    d: Record<string, unknown>,
    setName: (v: string) => void,
    setUserName: (v: string) => void,
) {
    setName(typeof d.first_name === 'string' ? d.first_name : '');
    setUserName(typeof d.username === 'string' ? d.username : '');
}

const userTest = {
    user: {
        id: 10000,
        // id: 495415408,
        // first_name: 'Максим',
        first_name: 'Мак1симTest',
        username: 'max1a_max_test',
        photo_url: 'https://t.me/i/userpic/320/tRLyXd3OnldEG7rag4AAV0Yx_25m4bVUERLA4SUhVEQ.jpg',
        auth_date: 1774148048,
        // hash: '413f6742dcdc1f4747c3e86731c8ab00c9ce86968f0629309a04f42a638a89c7',
        hash: '413f6712dcdc1f4757c3e85731c8ab00c9ce86968f0529309a04f42a638a89c7',
    },
};

function App() {
    const [user, setUser] = useState<
        TelegramWebAppUser | TelegramLoginWidgetPayload | Record<string, unknown> | null
    >(null);
    const [name, setName] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [showBrowserLogin, setShowBrowserLogin] = useState(false);

    useEffect(() => {
        const webApp = getTelegramWebApp();
        webApp?.ready();
        setShowBrowserLogin(!isTelegramMiniApp());
    }, []);
    const { data: authData, error, isError, mutate: authTelegramWidget } = useAuthTelegramWidget();

    const authUser = () => {
        const u = getTelegramUser();
        const initData = getTelegramInitData();
        setUser(u);
        setName(u?.first_name ?? '');
        setUserName(u?.username ?? '');
        if (import.meta.env.DEV) {
            console.log('initData для бэкенда:', initData);
        }
    };

    const onTelegramWidgetAuth = (payload: TelegramLoginWidgetPayload) => {
        console.log('authData', payload);

        authTelegramWidget(payload);
     
        // setUser(authData);

        // setName(authData?.first_name ?? '');
        // setUserName(authData?.username ?? '');
    };

    return (
        <>
            <h1 className='text-3xl font-bold text-center mt-10'>Привет</h1>

            {showBrowserLogin && (
                <div className='mt-8 flex flex-col items-center gap-2'>
                    <p className='text-muted-foreground text-sm text-center px-4'>
                        Вход через Telegram (браузер)
                    </p>
                    <TelegramLoginWidget
                        botUsername={TELEGRAM_BOT_USERNAME}
                        onAuth={onTelegramWidgetAuth}
                    />
                    {/* {authError && (
                        <p className='text-destructive text-sm text-center px-4 max-w-md'>
                            <pre>{authError}</pre>
                        </p>
                    )} */}
                </div>
            )}

            {!showBrowserLogin && (
                <Button className='mx-auto block mt-10' onClick={authUser}>
                    Авторизоваться
                </Button>
            )}

            <Button onClick={() => onTelegramWidgetAuth(userTest)}>Тест</Button>
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor='fieldgroup-name'>Имя</FieldLabel>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id='fieldgroup-name'
                        placeholder='Имя пользователя'
                    />
                </Field>
                <Field>
                    <FieldLabel htmlFor='fieldgroup-email'>Логин</FieldLabel>
                    <Input
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        id='fieldgroup-login'
                        type='text'
                        placeholder='Логин'
                    />
                </Field>
                <Field orientation='horizontal'>
                    <Button type='reset' variant='outline'>
                        Сбросить
                    </Button>
                    <Button type='submit'>Сохранить</Button>
                </Field>
            </FieldGroup>

            {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
        </>
    );
}

export default App;

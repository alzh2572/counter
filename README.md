# counter

Минимальный счётчик на React Native и Expo (SDK 54).

## Требования

- Node.js
- Expo Go **54.x** на телефоне (проект не совместим с более старыми версиями)

## Запуск

```powershell
cd C:\Work\counter
npm install
npx expo start --lan --port 8081
```

Дальше:

1. Убедитесь, что телефон и ПК в одной Wi‑Fi сети.
2. В Expo Go отсканируйте QR-код из терминала  
   или откройте URL вида `exp://192.168.x.x:8081`.
3. На iPhone включите доступ Expo Go к локальной сети:  
   **Настройки → Expo Go → Локальная сеть**.

Если порт `8081` занят:

```powershell
npx expo start --lan --port 8082
```

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

## iPhone hotspot при включённом Ethernet

Если ПК одновременно в Ethernet и в сети iPhone (режим модема), Expo часто показывает QR с IP Ethernet (`192.168.x.x`) — с телефона он недоступен. Задайте IP хотспота явно:

```powershell
$env:REACT_NATIVE_PACKAGER_HOSTNAME = "172.20.10.3"
npx expo start --lan --port 8081
```

Проверить свой IP в сети iPhone:

```powershell
Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.IPAddress -like '172.20.*' }
```

Подставьте полученный адрес вместо `172.20.10.3`.

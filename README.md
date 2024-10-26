# Tauri

可实现 Desktop, Web, Android 等多端应用.

## 配置

* **vite.config.ts**

  直接复制现有的即可.

* **src-tauri/tauri.conf.json**

  主要是 `build` 的配置, `frontendDist` 要根据不同的 react 框架而定; 如果是 `vite`, 则就是 `../dist` .

* Android

  * 依赖

    国内 gradle 源的话, 需要修改 `com.android.tools.build:gradle` 的版本为 `8.0.1`. 位置在:

    `src-tauri/gen/android/build.gradle.kts`
    `src-tauri/gen/android/buildSrc/build.gradle.kts`

  * 权限

    在 `src-tauri/gen/android/app/src/main/AndroidManifest.xml` 中添加摄像头权限:

    ```xml
    <uses-permission android:name="android.permission.CAMERA" />
    ```

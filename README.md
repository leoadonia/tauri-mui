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

* UI

  * 禁用 scrollbar

    * **index.html**

      ```html
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      ```

      禁用左右拖动.

    * **src/global.css**

      ```css
      html body {
          overflow: hidden;
          height: 100vh;
          width: 100vw;
          margin: 0;
          padding: 0;
      }
      ```

    * **src/App.css**

      ```css
      .container {
          overflow-y: scroll;
          -ms-overflow-style: none;
          scrollbar-width: none;
          height: 100vh;
          width: 100vw;
      }

      .container::-webkit-scrollbar {
          display: none;
      }
      ```

    * 其他原生组件需要设置 `maxWidth: "100%"`.

package io.jokester.reactnative_boilerplate;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.Window;

import com.facebook.react.LifecycleState;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;

public class MainActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler {
    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mReactRootView = new ReactRootView(this);

        requestWindowFeature(Window.FEATURE_NO_TITLE);
        {
            ReactInstanceManager.Builder builder =
                    ReactInstanceManager.builder()
                            .setApplication(getApplication())
                            .addPackage(new MainReactPackage())
                            .setUseDeveloperSupport(BuildConfig.DEBUG)
                            .setInitialLifecycleState(LifecycleState.BEFORE_RESUME);

            if (BuildConfig.DEBUG) {
                // Debug build: load js from dev server
                builder.setJSMainModuleName("js/index.android");
            } else {
                // Production build: load js from assets
                builder.setBundleAssetName("bundle.js");
            }

            mReactInstanceManager = builder.build();
        }
        mReactRootView.startReactApplication(mReactInstanceManager, "MyAwesomeApp", null);
        setContentView(mReactRootView);
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostPause();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostResume(this, this);
        }
    }

    @Override
    public void onBackPressed() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onBackPressed();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        // open dev menu with menu button
        if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null && BuildConfig.DEBUG) {
            mReactInstanceManager.showDevOptionsDialog();
            return true;
        }
        return super.onKeyUp(keyCode, event);
    }
}

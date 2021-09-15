## Deploying to GCP

1. Create new project in GCP
2. Add `cloudbuild.yaml` file to repo

```
steps:
- name: node:10.15.1
  entrypoint: npm
  args: ["install"]
- name: node:10.15.1
  entrypoint: npm
  args: ["run", "build"]
- name: "gcr.io/cloud-builders/gcloud"
  args: ["app", "deploy"]
timeout: "1600s"
```

3. Add `app.yaml` file to repo

```
runtime: nodejs10
handlers:
  - url: /
    static_files: build/index.html
    upload: build/index.html
  - url: /
    static_dir: build
```

4. Enable Cloud Functions, Cloud Run, App Engine, Service Accounts and Cloud Build [in settings](https://console.cloud.google.com/cloud-build/settings/service-account).

5. Create App in [App Engine](https://console.cloud.google.com/appengine) console.

6. Create Trigger for CI/CD from Github repo, in [Cloud Build Triggers](https://console.cloud.google.com/cloud-build/triggers) page. Make sure to reference the `cloudbuild.yaml` file for configuration file.

7. Double-check permission in [IAM](https://console.cloud.google.com/iam-admin/iam) console.

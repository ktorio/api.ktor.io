---
title: MutableOriginConnectionPoint.remoteHost - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.features</a> / <a href="index.html">MutableOriginConnectionPoint</a> / <a href="./remote-host.html">remoteHost</a></div>

# remoteHost

<div class="signature"><code><span class="keyword">var </span><span class="identifier">remoteHost</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Overrides <a href="../../io.ktor.http/-request-connection-point/remote-host.html">RequestConnectionPoint.remoteHost</a>

Client address or host name (generally not resolved to name for performance reasons).
For <a href="#">io.ktor.application.ApplicationRequest.local</a> instance could point to
a proxy our application running behind.
NEVER use it for user authentication as it can be easily falsified (user can simply set some HTTP headers
such as X-Forwarded-Host so you should NEVER rely on it in any security checks.
If you are going to use it to create a back-connection please do it with care as an offender can easily
use it to force you to connect to some host that is not intended to be connected to so that may cause
serious consequences.

**Getter**

Client address or host name (generally not resolved to name for performance reasons).
For <a href="#">io.ktor.application.ApplicationRequest.local</a> instance could point to
a proxy our application running behind.
NEVER use it for user authentication as it can be easily falsified (user can simply set some HTTP headers
such as X-Forwarded-Host so you should NEVER rely on it in any security checks.
If you are going to use it to create a back-connection please do it with care as an offender can easily
use it to force you to connect to some host that is not intended to be connected to so that may cause
serious consequences.

**Setter**

Client address or host name (generally not resolved to name for performance reasons).
For <a href="#">io.ktor.application.ApplicationRequest.local</a> instance could point to
a proxy our application running behind.
NEVER use it for user authentication as it can be easily falsified (user can simply set some HTTP headers
such as X-Forwarded-Host so you should NEVER rely on it in any security checks.
If you are going to use it to create a back-connection please do it with care as an offender can easily
use it to force you to connect to some host that is not intended to be connected to so that may cause
serious consequences.


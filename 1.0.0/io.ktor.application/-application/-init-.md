---
title: Application.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.application</a> / <a href="index.html">Application</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">Application</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.application.Application$<init>(io.ktor.application.ApplicationEnvironment)/environment">environment</span><span class="symbol">:</span>&nbsp;<a href="../-application-environment/index.html"><span class="identifier">ApplicationEnvironment</span></a><span class="symbol">)</span></code></div>

Represents configured and running web application, capable of handling requests.
It is also the application coroutine scope that is cancelled immediately at application stop so useful
for launching background coroutines.

### Parameters

<code>environment</code> - Instance of <a href="../-application-environment/index.html">ApplicationEnvironment</a> describing environment this application runs in
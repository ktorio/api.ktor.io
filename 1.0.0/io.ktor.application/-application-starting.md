---
title: ApplicationStarting - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.application</a> / <a href="./-application-starting.html">ApplicationStarting</a></div>

# ApplicationStarting

<div class="signature"><code><span class="keyword">val </span><span class="identifier">ApplicationStarting</span><span class="symbol">: </span><a href="-event-definition/index.html"><span class="identifier">EventDefinition</span></a><span class="symbol">&lt;</span><a href="-application/index.html"><span class="identifier">Application</span></a><span class="symbol">&gt;</span></code></div>

Event definition for Application Starting event

Note, that application itself cannot receive this event because it fires before application is created
It is meant to be used by engines.


# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-05-03

### Added
- Automated Facebook posting for new weekly challenges.
- Dynamic page access token generation for Facebook API integration.

### Fixed
- Facebook API authentication by implementing automated token renewal.
- Improved error handling in token generation and posting scripts.

## [1.0.0] - 2026-04-28

### Added
- Initial project structure with TypeScript and Node.js.
- AI integration via custom backend for generating weekly challenges.
- Automated challenge extractor and directory creator.
- Persistent tracking system in `data/lists.txt` to ensure sequential learning.
- Markdown-based lesson generation with real-life analogies.
- Python logic-only templates for beginner challenges.
- GitHub Actions workflow for AI tutor automation.
- Basic error handling for AI response parsing and file operations.
- Initial project documentation (`README.md` and `CHANGELOG.md`).

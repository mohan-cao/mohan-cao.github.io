import { fetchProjects } from './ProjectsComponent';

function checkValidProject(json) {
    expect(json).toBeInstanceOf(Array);
    for (let i = 0; i < json.length; i++) {
        expect(json[i]).toHaveProperty('id');
        expect(json[i]).toHaveProperty('name');
        expect(json[i]).toHaveProperty('description');
        expect(json[i]).toHaveProperty('homepage');
        expect(json[i]).toHaveProperty('html_url');
        expect(json[i]).toHaveProperty('stargazers_count');
        expect(json[i]).toHaveProperty('forks');
    }
  }

it('fetches new projects', () => {
    return fetchProjects().then(checkValidProject);
})